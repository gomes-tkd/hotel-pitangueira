import styles from "./RoomDelete.css";
import { removeRoom } from "../../Firebase";

const RoomDelete = ({ id }) => {

    return (
        <div className={styles.deletar}>
            <button
                onClick={() => removeRoom(id)}
            >
                Deletar
            </button>
        </div>
    );
};

export default RoomDelete;