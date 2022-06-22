import { CheckCircle, Lock } from "phosphor-react";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = (props: LessonProps) => {
  const isLessonAvailable = true;

  return (
    <a href="#">
      <span className="text-gray-300">{props.availableAt.toString()}</span>
      <div className="p-4 mt-2 border rounded border-gray-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-semibold flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="border rounded border-green-300 px-2 py-[0.125rem] text-xs font-bold uppercase text-white">
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
};

export default Lesson;
