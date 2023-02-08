const Main = () => {
  return (
    <>
      <main className="flex">
        <aside className="w-[295px] h-[917px] bg-[#73B9FF]">
          <div className="w-[63px] h-[63px] bg-[#D9D9D9] rounded-full ml-[30px] mt-[50px]"></div>

          <h3 className="text-[16px] mt-[20px] ml-[30px] font-bold text-[#FFFFFF]">
            Radhika Dhawan Puri
          </h3>

          <p className="text-[16px] ml-[30px] text-[#FFFFFF] mb-[30px]">
            Senior Client Services
          </p>

          <div className="w-[230px] mx-auto mb-[30px]">
            <hr />
          </div>

          <div className="ml-[30px]">
            <h3 className="text-[11px] mt-[20px] text-[#FFFFFF]">NAVIGATION</h3>
            <ul className="mt-[10px]">
              <li className="text-[16px] font-bold text-[#1E67AF]">
                Dashboard
              </li>
              <li className="text-[16px] font-bold text-[#FFFFFF]">
                Approvals
              </li>
            </ul>
          </div>

          <div className="w-[230px] mx-auto mb-[30px] mt-[30px]">
            <hr />
          </div>

          <div className="ml-[30px]">
            <h3 className="text-[11px] mt-[20px] text-[#FFFFFF]">MY ACCOUNT</h3>

            <ul className="mt-[10px]">
              <li className="text-[16px] font-bold text-[#FFFFFF]">
                My Clients
              </li>
              <li className="text-[16px] font-bold text-[#FFFFFF]">
                Edit Profiles
              </li>
            </ul>
          </div>
        </aside>

        <section className="p-[40px]">
          <h1 className="text-[28px] font-bold text-[#323A46]">
            Hi Radhika, welcome back!
          </h1>

          <p className="mt-[50px] font-bold text-[20px]">Your client list</p>
          <p className="text-[14px]">You currently servicing 3 clients</p>

          <div className="flex mt-[30px]">
            <div className="w-[259px] h-[184px] mr-[10px] border border-black border-solid rounded-md px-[20px]">
              <div></div>
              <h4 className="font-bold text-[16px]">DBS Bank</h4>
              <p className="text-[11px]">
                DBS Bank Limited is a Singaporean multinational banking and
                financial services corporation headquartered at the Marina Bay
                Financial Centre in the Marina Bay district of Singapore.
              </p>
            </div>
            <div className="w-[259px] h-[184px] mr-[10px] border border-black border-solid rounded-md px-[20px]">
              <div></div>
              <h4 className="font-bold text-[16px]">Proudfoot</h4>
              <p className="text-[11px]">
                Proudfoot engages teams and leadership, at all levels, to create
                innovative solutions to operational constraints and solve the
                people challenge associated with making sure that change takes
                place.
              </p>
            </div>
            <div className="w-[259px] h-[184px] mr-[10px] border border-black border-solid rounded-md px-[20px]">
              <div></div>
              <h4 className="font-bold text-[16px]">RMI</h4>
              <p className="text-[11px]">
                RMI is a trusted global verification partner for Asia-Pacific
                organisations, offering a highly personalised and comprehensive
                background screening service.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
