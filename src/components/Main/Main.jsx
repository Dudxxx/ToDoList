import styles from "./Main.module.css"

export function Main() {
    return (
        <div className={styles.Main}>
            <form action="">
                <input type="text" id="input" placeholder="  React"/>
                <button type="button">+</button>
            </form>
            <ol className={styles.List}>
                <li>Item 1 <button>X</button></li>
                <li>Item 2 <button>X</button></li>
                <li>Item 3 <button>X</button></li>
            </ol>
        </div>
    )
}