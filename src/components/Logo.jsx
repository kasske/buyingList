import { useItemsStore } from "../stores/itemsStore";

export default function Logo() {
  const toggleSidebar = useItemsStore((state) => state.toggleSidebar);

  return <img onClick={() => toggleSidebar()} src="https://bytegrad.com/course-assets/react-nextjs/dots.png" />;
}
