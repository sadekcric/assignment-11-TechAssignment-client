import faq from "../../assets/faq.jpg";

const Faq = () => {
  return (
    <section className="my-10 lg:my-24 ">
      <div className="mb-5 lg:mb-10">
        <h2 className="text-center text-3xl lg:text-5xl font-bold">FAQs</h2>
        <p className="text-center lg:w-2/3 mx-auto lg:text-lg font-semibold mt-3">
          Explore our FAQ section to find answers to commonly asked questions about TechAssignment. Whether you're wondering about account
          setup, troubleshooting, or navigating our platform, we've got you covered. Dive into our comprehensive list of FAQs and get the
          information you need to make the most out of your learning experience.
        </p>
      </div>

      <div className="dark:bg-gray-100 dark:text-gray-800 ">
        <div className="container flex flex-col mx-auto rounded-xl lg:items-center p-3 gap-5  bg-blue-950 lg:px-6 lg:py-12 lg:flex-row">
          <div className="lg:flex-1 h-full">
            <img src={faq} alt="" className="rounded-lg  dark:bg-gray-500 aspect-video w-full h-[492px]" />
          </div>

          <div className="lg:w-1/2 lg:flex-1 xl:w-3/5 dark:bg-gray-100">
            <div className="space-y-5 text-white">
              <div className="collapse bg-violet-400  collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">How do I create an assignment?</div>
                <div className="collapse-content bg-violet-300 text-blue-950 font-semibold">
                  <p>
                    To create an assignment, simply navigate to the "Create Assignment" page and fill out the required fields, including the
                    title, description, marks, thumbnail image URL, difficulty level, and due date. Once completed, click the "Create"
                    button, and your assignment will be published for all users to access.
                  </p>
                </div>
              </div>

              <div className="collapse bg-violet-400 collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Can I delete an assignment after it's been created?</div>
                <div className="collapse-content bg-violet-300 text-blue-950 font-semibold">
                  <p>
                    Yes, you can delete an assignment that you've created. Simply locate the assignment you wish to delete on the
                    "Assignments" page, click on the delete button, and confirm the action in the prompt that appears. Please note that only
                    the creator of an assignment can delete it.
                  </p>
                </div>
              </div>

              <div className="collapse bg-violet-400 collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How can I update an assignment?</div>
                <div className="collapse-content bg-violet-300 text-blue-950 font-semibold">
                  <p>
                    To update an assignment, navigate to the "Assignments" page, find the assignment you want to update, and click on the
                    update button. You can then make changes to the assignment details as needed and click the "Update" button to save your
                    changes.
                  </p>
                </div>
              </div>

              <div className="collapse bg-violet-400 collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What happens after I submit an assignment?</div>
                <div className="collapse-content bg-violet-300 text-blue-950 font-semibold">
                  <p>
                    After submitting an assignment, it will be marked as pending until it is reviewed and graded by an instructor. You can
                    view the status of your submitted assignments on the "My Submitted Assignments" page and track any feedback or grades
                    provided by the instructor.
                  </p>
                </div>
              </div>

              <div className="collapse bg-violet-400 collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How can I view assignments created by other users?</div>
                <div className="collapse-content bg-violet-300 text-blue-950 font-semibold">
                  <p>
                    To view assignments created by other users, simply navigate to the "Assignments" page, where you'll find a list of all
                    available assignments. You can filter assignments based on difficulty level and explore each assignment to learn more
                    about its details and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
