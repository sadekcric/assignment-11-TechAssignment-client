import feature1 from "../../../assets/feature1.jpg";
import feature2 from "../../../assets/feature2.jpg";
import feature3 from "../../../assets/feature3.png";
const Features = () => {
  return (
    <section className=" mt-10 lg:mt-24 p-3 container mx-auto">
      <div className="mb-5 lg:mb-10">
        <h2 className="text-center text-3xl lg:text-5xl font-bold mb-3">Discover Our Features</h2>
        <p className="lg:w-2/3 lg:mx-auto text-center lg:text-lg font-semibold">
          Uncover the array of powerful tools and capabilities waiting for you at TechAssignment. From intuitive assignment creation to
          seamless collaboration, our features are designed to enhance your learning experience.{" "}
        </p>
      </div>

      <div className="p-4 lg:p-8  dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col shadow-xl border-t-4 border-transparent hover:border-t-4 hover:border-blue-900 overflow-hidden rounded-md lg:flex-row transition">
            <img src={feature1} alt="" className="h-112 dark:bg-gray-500 lg:w-[60%] aspect-video" />

            <div className="flex flex-col items-center justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">Interactive Assignments</h3>
              <p className="my-6 dark:text-gray-600 lg:text-lg">
                Engage in dynamic learning experiences with our interactive assignments feature. Dive into hands-on activities, quizzes, and
                challenges designed to deepen your understanding and reinforce your skills.
              </p>
              <p className="lg:text-lg">Interact with content like never before and take your learning to new heights.</p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-xl border-t-4 border-transparent  hover:border-t-4 hover:border-blue-900 lg:flex-row-reverse transition">
            <img src={feature2} alt="" className="h-112 dark:bg-gray-500 lg:w-[60%] aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">Collaborative Learning Spaces</h3>
              <p className="my-6 dark:text-gray-600 lg:text-lg">
                Foster a sense of community and collaboration with our collaborative learning spaces feature. Connect with peers, share
                insights, and work together on group projects effortlessly.
              </p>
              <p className="lg:text-lg">
                Utilize real-time messaging, file sharing, and collaborative tools to maximize productivity and enhance teamwork.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-xl border-t-4 border-transparent  hover:border-t-4 hover:border-blue-900 lg:flex-row transition">
            <img src={feature3} alt="" className="h-112 dark:bg-gray-500 lg:w-[60%] aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">Personalized Progress Tracking</h3>
              <p className="my-6 dark:text-gray-600 lg:text-lg">
                Stay on top of your learning journey with our personalized progress tracking feature. Monitor your progress, track your
                achievements, and set goals to keep yourself motivated and focused.
              </p>
              <p className="lg:text-lg">
                Gain valuable insights into your strengths and areas for improvement, empowering you to take control of your learning
                experience.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
