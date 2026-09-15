function LinhaTabela(props) {
    if (props.status == "Ativa") {
        
    }
    return (
        <tr>
            <td className="px-4 fw-semibold text-white">
                {props.maquina}
            </td>

            <td className="text-secondary">
                {props.planta}
            </td>

            <td className="fw-semibold text-info">
                {props.oee}%
            </td>

            <td>
                <span className="text-success fw-semibold">
                {props.disponibilidade}%
                </span>
            </td>

            <td className="text-light">
                {props.producao} un/h
            </td>

            <td>
                <span className="badge rounded-pill text-bg-success">
                {props.status}
                </span>
            </td>
        </tr>
    )
}

export default LinhaTabela