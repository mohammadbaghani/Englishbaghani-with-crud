import { transactions } from "./datas";
import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"WidgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="WidgetLg">
      <h3 className="WidgetLgTitle">برترین زبان آموزان</h3>
      <table className="WidgetLgTable">
        <tr className="WidgetLgTr">
          <th className="WidgetLgTh">نام زبان آموز</th>
          <th className="WidgetLgTh">گروه آموزشی</th>
          <th className="WidgetLgTh">شهر</th>
          <th className="WidgetLgTh">وضعیت</th>
        </tr>

        {transactions.map((transaction) => (
          <tr key={transaction.id} className="WidgetLgTr">
            <th className="WidgetLgTh zabanamuz">
              <img src={transaction.img} className="WidgetLgImg" />
        {transaction.customer}
            </th>
            <th className="WidgetLgTh">{transaction.date}</th>

            <th className="WidgetLgTh">{transaction.amount}</th>

            <th className="WidgetLgTh">
              <Button type={transaction.status} />
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
}
