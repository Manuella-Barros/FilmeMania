function SelectGenre() {
    return (
        <select id="favGenre">
            <option> Selecionar </option>
            <option value="terror"> Terror </option>
            <option value="acao"> Ação </option>
            <option value="suspense"> Suspense </option>
            <option value="drama"> Drama </option>
            <option value="comedia"> Comédia </option>
            <option value="romance"> Romance </option>
            <option value="infantil"> Infantil </option>
        </select>
    );
}

export default SelectGenre;