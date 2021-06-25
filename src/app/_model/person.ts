interface IObjectKeys {
    [key: string]: string | number;
}

export interface IPerson extends IObjectKeys {
    name: string;
    surname: string;
    age: number;
    country: string;
    phone: string;
}