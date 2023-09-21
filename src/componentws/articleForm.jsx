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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 ">
      {/* register your input into the hook by invoking the "register" function */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <label
            className="text-lg font-bold leading-tight tracking-wide text-white uppercase"
            htmlFor="name"
          >
            Full name
          </label>
          <input
            type="text"
            className="inline-flex flex-col items-start justify-start gap-2 p-4 text-[#C0C0C0] bg-black border rounded-lg  h-14 border-zinc-800 placeholder-[#C0C0C0]::placeholder"
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
            type="email"
            className="inline-flex flex-col items-start justify-start gap-2 p-4 text-[#C0C0C0] bg-black border rounded-lg  h-14 border-zinc-800 placeholder-[#C0C0C0]::placeholder"
            placeholder="example@email.com"
            {...register("email", { required: true })}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <label
            className="text-lg font-bold leading-tight tracking-wide text-white uppercase"
            htmlFor="company"
          >
            company
          </label>
          <input
            className="inline-flex flex-col items-start justify-start gap-2 p-4 text-[#C0C0C0] bg-black border rounded-lg  h-14 border-zinc-800 placeholder-[#C0C0C0]::placeholder"
            placeholder="EX.Facebook"
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label
            className="text-lg font-bold leading-tight tracking-wide text-white uppercase"
            htmlFor="number"
          >
            phone Number
          </label>
          <input
            type="tel"
            className="inline-flex flex-col items-start justify-start gap-2 p-4 text-[#C0C0C0] bg-black border rounded-lg  h-14 border-zinc-800 placeholder-[#C0C0C0]::placeholder"
            placeholder="(123) 456 789"
            {...register("number", { required: true })}
          />
        </div>
      </div>

      <textarea
        placeholder="message"
        className="inline-flex items-start justify-start w-full h-48 p-4 mt-10 bg-black border rounded-lg placeholder:text-white placeholder:font-bold placeholder:text-lg border-zinc-800"
      ></textarea>
      <div className="inline-flex items-start justify-center h-16 px-8 py-6 bg-white border border-white shadow w-60 rounded-3xl">
        <div className="text-center text-zinc-950 text-lg font-semibold font-['Montserrat'] uppercase leading-tight tracking-wide">
          Send Message
        </div>
      </div>
      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      {/* <input type="submit" /> */}
    </form>
  );
}
