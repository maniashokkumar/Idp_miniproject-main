export interface formdata {
    title: string;
    content: string;
    description: string;
    author: string;
    publishedAt: Date;


}

export class Formclassinterface implements formdata {
    title = "";
    content = "";
    description = "";
    author = "";
    publishedAt = new Date;
}
