const SwitchBtn = ({ switchTime, handleChange }) => {
  return (
    <form className="w-1/4 lg:w-[200px] sm-border">
      <select
        value={switchTime}
        onChange={async (e) => await handleChange(e.target.value)}
        className="w-full text-[16px] lg:text-lg py-1 px-2 font-bold focus:outline-blue-600"
      >
        <option value="day">Daily</option>
        <option value="week">Weekly</option>
      </select>
    </form>
  );
};

export default SwitchBtn;
