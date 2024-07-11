import ErrorStack from "./error";

function Error({ error }: { error: Error }) {
  return <ErrorStack error={error} />;
}

Error.getInitialProps = ({ res, err }: any) => {
  const error = res ? res.error : err ? err.error : "NULL";
  return { error };
};

export default Error;
