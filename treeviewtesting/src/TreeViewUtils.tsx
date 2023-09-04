import { TreeViewNode } from "./treeViewNode"

const updateTreeNode = (data: TreeViewNode[], nodeId: string | number, fieldName: "Name" | "HasChildren" | "ParentId" | "Expanded", fieldValue: string | Number) => {
    if (typeof (nodeId) === "string") {
      nodeId = Number.parseInt(nodeId)
    }
    let node = data.find(x => x.Id === nodeId)
    if (node) {
      //@ts-ignore
      node[fieldName] = fieldValue
    }
  }
  