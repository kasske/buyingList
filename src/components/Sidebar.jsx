import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);
  const showSidebar = useItemsStore((state) => state.showSidebar);

  console.log("Sidebar rendering...");

  return (
    <div className={`sidebar ${showSidebar ? "show-sidebar" : "hide-sidebar"}`}>
      <AddItemForm onAddItem={addItem} />

      <ButtonGroup />
    </div>
  );
}