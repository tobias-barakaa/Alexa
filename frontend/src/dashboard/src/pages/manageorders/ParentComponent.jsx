import EditBox from './EditBox';

const ParentComponent = () => {
  return (
    <div className="edit-boxes-container">
      <EditBox title="Edit Blog" color="#fbbf24" />
      <EditBox title="Edit Article" color="#10b981" />
      <EditBox title="Edit Resume" color="#3b82f6" />
      <EditBox title="Edit Email Copywriting" color="#ec4899" />
    </div>
  );
};

export default ParentComponent;
