export class TreeViewNode {
    constructor(name: string, id: number, parentId?: string | number | undefined) {
        this.Name = name;
        this.Id = id;
        if (parentId) {
            if (typeof (parentId) === "string") {
                this.ParentId = Number.parseInt(parentId);
            }
            else {
                this.ParentId = parentId;
            }
        }

        this.HasChildren = false;
    }
    Name: string;
    Id: number = -1;
    ParentId: number | undefined;
    HasChildren: boolean;
}