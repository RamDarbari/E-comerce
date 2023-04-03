export interface signUp{
    name: string;
    email: string;
    number: number
    password: string;
    password2: string;

}

export interface login {
    username: string;
    email: string;
    password: number;
    passsword2:number;  
    

}

export interface admin {
    name: string
}

export interface product {
    productname: string;
    brand: string;
    description: string;
    price: number;
    quantity: number;
    image: string,
    _id: string  
}