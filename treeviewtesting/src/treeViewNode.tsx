export class TreeViewNode {
    constructor(name: string, id: number, parentId?: number | undefined) {
        this.Name = name;
        this.Id = id;
        this.ParentId = parentId;
    }
    Name: string;
    Id: number = -1;
    ParentId: number | undefined;
}