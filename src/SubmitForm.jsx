import PropTypes from "prop-types";
import CustomButton from "./CustomButton";

function SubmitForm({ title, body }) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm shadow-xl mb-8">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block font-bold text-lg text-purple-300 mb-2"
        >
          Title:
        </label>
        <input
          id="title"
          name="title"
          placeholder="Announcement..."
          defaultValue={title}
          className="w-full bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="body"
          className="block font-bold text-lg text-purple-300 mb-2"
        >
          Body:
        </label>
        <textarea
          id="body"
          name="body"
          placeholder="Write your announcement here..."
          defaultValue={body}
          className="w-full bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-all"
        />
      </div>
      <CustomButton 
        text="Submit"
        type="submit"
        variant="primary"
        className="mt-4"
      />
    </div>
  );
}

SubmitForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default SubmitForm;
