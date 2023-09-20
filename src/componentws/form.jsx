import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-4">
          <label
            className="text-lg font-bold leading-tight tracking-wide text-white uppercase"
            htmlFor="name"
          >
            Full name
          </label>
          <input
            className="inline-flex flex-col items-start justify-start gap-2 p-4 text-[#C0C0C0] bg-black border rounded-lg w-80 h-14 border-zinc-800 placeholder-[#C0C0C0]::placeholder"
            placeholder="John Carter"
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label
            className="text-lg font-bold leading-tight tracking-wide text-white uppercase"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="inline-flex flex-col items-start justify-start gap-2 p-4 text-[#C0C0C0] bg-black border rounded-lg w-80 h-14 border-zinc-800 placeholder-[#C0C0C0]::placeholder"
            placeholder="example@email.com"
            {...register("email", { required: true })}
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-14">
        <div className="flex flex-col gap-4">
          <label
            className="text-lg font-bold leading-tight tracking-wide text-white uppercase"
            htmlFor="company"
          >
            company
          </label>
          <input
            className="inline-flex flex-col items-start justify-start gap-2 p-4 text-[#C0C0C0] bg-black border rounded-lg w-80 h-14 border-zinc-800 placeholder-[#C0C0C0]::placeholder"
            placeholder="Ex. Facebook"
            {...register("company", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label
            className="text-lg font-bold leading-tight tracking-wide text-white uppercase"
            htmlFor="phone"
          >
            Phone number
          </label>
          <input
            className="inline-flex flex-col items-start justify-start gap-2 p-4 text-[#C0C0C0] bg-black border rounded-lg w-80 h-14 border-zinc-800 placeholder-[#C0C0C0]::placeholder"
            placeholder="(123) 456 - 7890"
            {...register("phone", { required: true })}
          />
        </div>
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
