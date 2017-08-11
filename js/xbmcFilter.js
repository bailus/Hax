const Filter = class {

	out () {
		return undefined
	}

	isEmpty () {
		return true
	}

}

Filter.operator = class {

	constructor(name, field, value, operator='contains') {
		this.name = name
		this.field = field
		this.value = value
		this.operator = operator
	}

	isEmpty () {
		return (typeof this.name !== 'string') ||
			(this.name.length <= 0) ||
			(this.type !== undefined && typeof this.type !== this.type) ||
			(this.type === 'string' && this.value.length <= 0)
	}

	out () {

		if (this.isEmpty())
			return undefined

		else
			return {
				"operator": this.operator,
				"field": this.field,
				"value": this.value
			}

	}

	toString() {

		if (this.isEmpty())
			return ''

		else
			return `${ this.name }: ${ this.value }`

	}

}

Filter.string = class extends Filter.operator {
	constructor(...x) {
		x[1] = ''+x[1]
		super(x)
	}
}

Filter.number = class extends Filter.operator {
	constructor(...x) {
		x[1] = Number(x[1])
		super(x)
	}
}

Filter.combine = class extends Filter {

	constructor(operator, children) {
		super()
		this.operator = operator
		this.children = children
	}

	isEmpty() {
		return !Array.isArray(this.children) ||
			this.children.length <= 0
	}

	out() {
		if (this.isEmpty()) return undefined

		const o = {}
		o[this.operator] = this.children.map(filter => filter.out())
		return o
	}

	toString() {

		if (this.isEmpty())
			return ''

		else
			return this.children.map(child => child.toString()).join(` ${ this.operator } `)

	}

}

Filter.fromState = function(state, fields) {
	const children = fields
	.filter(field => state[field.key] !== undefined)
	.map(field => new (Filter.operator)(field.name, field.key, state[field.key]))
	return new (Filter.combine)('and', children)
}


export default Filter