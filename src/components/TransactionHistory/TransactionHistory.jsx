import css from './TransactionHistory.module.css';

function firstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function TransactionHistory({items}) {

    const body = items.map(item => 
    <tr key={item.id}>
        <td>{firstLetter(item.type)}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
    </tr>
    );
    return (<table className={css.table}>
        <thead className={css.thead}> 
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {body}
        </tbody>
    </table>
    );
}