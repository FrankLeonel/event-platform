import classNames from "classnames";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
interface LessonProps {
  title: string;
  lessonSlug: string;
  availableAt: Date;
  type: "live" | "class";
  onCloseSidebar: () => void;
}

const Lesson = ({
  title,
  lessonSlug,
  availableAt,
  type,
  onCloseSidebar,
}: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableAtFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const isActiveLesson = slug === lessonSlug;

  return (
    <Link
      to={isLessonAvailable ? `/event/lesson/${lessonSlug}` : ""}
      onClick={onCloseSidebar}
      className={classNames("group", {
        "cursor-not-allowed": !isLessonAvailable,
      })}
    >
      <span className="text-gray-300">{availableAtFormatted}</span>
      <div
        className={classNames(
          "p-4 mt-2 border rounded border-gray-500 group-hover:border-green-500",
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-semibold flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              "border rounded px-2 py-[0.125rem] text-xs font-bold uppercase text-white",
              {
                "border-white": isActiveLesson,
                "border-green-300": !isActiveLesson,
              }
            )}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={classNames("mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};

export default Lesson;
