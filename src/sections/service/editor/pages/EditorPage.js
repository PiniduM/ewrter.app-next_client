import { useLocation,useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import Editor from "../components/Editor.js"
import { useEffect } from "react";

const EditorPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(!newEdit && !edit) navigate(-1);
    })

    const newEdit = location.state;
    const edit = Cookies.get("edit");
    
    window.history.replaceState({}, document.title);
    if (newEdit) {
      Cookies.set("edit", JSON.stringify(newEdit));
      return <Editor data={newEdit}/>
    } else if (edit) {
      const currentEdit = JSON.parse(edit);
      return <Editor data={currentEdit}/>
    }
}

export default EditorPage;