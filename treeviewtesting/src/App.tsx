import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { Button, TextField } from '@mui/material';
import "./App.css";
import { useRef, useState } from 'react';
import { TreeViewNode } from './treeViewNode';

function App() {
  const treeviewRef = useRef<TreeViewComponent>();
  const [name, setName] = useState("")

  const addTreeNode = () => {
    let treeview = treeviewRef.current;

    if (treeview) {
      let data = getTreeViewData();
      const selectedId = treeview.selectedNodes[0];
      const newNode = new TreeViewNode(name, getNextId(data), selectedId);
      //@ts-ignore
      treeview.addNodes([newNode], selectedId)
      setName("");
    }
  }

  function getNextId(data: TreeViewNode[]) {
    if (data.length === 0)
      return 1;
    return data.sort((a, b) => a.Id - b.Id)[data.length - 1].Id + 1
  }

  function getTreeViewData(): TreeViewNode[] {
    //@ts-ignore
    return treeviewRef.current?.getTreeData();
  }

  // maps the appropriate column to fields property
  let fields: object = { dataSource: [], id: 'Id', parentID: 'ParentId', text: 'Name', hasChildren: 'HasChildren' };

  const changeDataSource = (data: any) => {
    if (treeviewRef.current) {
      treeviewRef.current.fields = {
        dataSource: data, id: 'Id', text: 'Name', parentID: 'ParentId', hasChildren: 'HasChildren', expanded: "Expanded"
      };
    }
  }
  return (
    <>
      <TreeViewComponent
        ref={(treeview) => treeviewRef.current = treeview as TreeViewComponent}
        fields={fields}
        allowDragAndDrop={true} />
      <TextField
        label="Outlined"
        variant="outlined"
        value={name}
        onChange={(evt) => setName(evt.target.value)} />
      <Button onClick={addTreeNode}>Add</Button>
    </>
  );
}

export default App;
