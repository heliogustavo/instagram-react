import Posts from "./Posts/Posts";
import Sidebar from "./Sidebar";
import Stories from "./stories/Stories";

export default function Body() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    );
}