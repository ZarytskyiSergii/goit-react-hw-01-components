import PropTypes from "prop-types";
// import data from "../data.json";

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.number).isRequired,
};
