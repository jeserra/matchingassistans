export class Customer 
{
	private name : string;
	address :string;
	id:number;
	constructor (theName: string){ this.name = theName}
}

export class Tutor extends Customer 
{ 
	constructor (thisName :string) { super (thisName)}
}