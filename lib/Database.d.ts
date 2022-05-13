import { IPropsDatabase, IDataContextProvider } from "./interfaces";
export declare class BaseDatabase {
    props: IPropsDatabase;
    constructor(props?: IPropsDatabase);
    requestPayloadFactory(resource: string, data: any): any;
    responsePayloadFactory(resource: string, data: any): any;
    createData(args: any): Promise<any>;
    createManyData(args: any): Promise<any>;
    deleteData(args: any): Promise<any>;
    deleteManyData(args: any): Promise<any>;
    getList(args: any): Promise<any>;
    getMany(args: any): Promise<any>;
    getOne(args: any): Promise<any>;
    updateData(args: any): Promise<any>;
    updateManyData(args: any): Promise<any>;
    customMethod(args: any): Promise<any>;
    getAPIUrl(): string;
    getDataProvider(): IDataContextProvider;
}
