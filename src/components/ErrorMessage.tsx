type Props = {
  message?: string;
};

function ErrorMessage({
  message = "Something went wrong while loading flights.",
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-red-500 text-3xl mb-3">⚠️</div>
      <p className="text-gray-300 mb-4">{message}</p>
    </div>
  );
}

export default ErrorMessage;