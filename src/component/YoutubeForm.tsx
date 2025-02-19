import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = { username: string; email: string; channel: string; };

function YoutubeForm() {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };

  return (
    <div>
      <h1>YouTube Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Username is required" })}
        />
        <label>Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        <label>Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", { required: "Channel is required" })}
        />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
export default YoutubeForm;
