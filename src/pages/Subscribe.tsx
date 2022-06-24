import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

const Subscribe = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };

  return (
    <div className="min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px] flex flex-col gap-6">
          <Logo />

          <h1 className="text-[2.5rem] leading-tight font-normal">
            Construa uma{" "}
            <strong className="text-blue-500 font-semibold">
              aplicação completa
            </strong>
            , do zero, com{" "}
            <strong className="text-blue-500 font-semibold ">React JS</strong>
          </h1>

          <p className="text-gray-200 font-normal text-xs leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 rounded border border-gray-500 gap-6 flex flex-col">
          <strong className="text-2xl">Inscreva-se gratuitamente</strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
            />

            <input
              type="email"
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-4 bg-green-500 rounded uppercase text-sm font-bold hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img
        src="/src/assets/images/code-mockup.png"
        alt="code mockup"
        className="mt-10"
      />
    </div>
  );
};

export default Subscribe;
