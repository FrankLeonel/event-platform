import classNames from "classnames";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGetLessonsQuery } from "../../graphql/generated";
import Lesson from "../Lesson";

interface DrawerProps {
  show: boolean;
  onToggleSidebar: () => void;
}

const Sidebar = ({ show = false, onToggleSidebar }: DrawerProps) => {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={classNames(
        "fixed h-full w-full top-[73px] pb-28 lg:top-0 lg:pb-4 transform right-0 lg:translate-x-0 overflow-y-scroll lg:overflow-y-hidden z-[99] lg:z-0 lg:relative ease-in-out duration-300 sm:w-[348px] p-6 bg-gray-700 border-l border-gray-600",
        {
          "translate-x-0": show,
          "translate-x-full": !show,
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronogramas de aulas
      </span>

      <div className="flex flex-col gap-8">
        {!data?.lessons.length
          ? Array.from({ length: 7 }, (v, i) => (
              <SkeletonTheme key={i} baseColor="#202020" highlightColor="#444">
                <p>
                  <Skeleton count={3} />
                </p>
              </SkeletonTheme>
            ))
          : data?.lessons.map((lesson) => (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                lessonSlug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
                onCloseSidebar={onToggleSidebar}
              />
            ))}
      </div>
    </aside>
  );
};

export default Sidebar;
