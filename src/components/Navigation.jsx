import "./navigation.scss";

export default function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__items">
                <li><a href="/reverse_strings" className="navigation__item">Reverse strings</a></li>
                <li><a href="" className="navigation__item navigation__item_in-progress">WIP...</a></li>
            </ul>
        </nav>
    );
}
