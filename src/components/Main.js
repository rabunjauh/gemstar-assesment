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

        <section className="p-[40px] flex-wrap">
          <h1 className="text-[28px] font-bold text-[#323A46]">
            Hi Radhika, welcome back!
          </h1>

          <p className="mt-[50px] font-bold text-[20px]">Your client list</p>
          <p className="text-[14px]">You currently servicing 3 clients</p>

          <div className="flex mt-[30px]">
            <div className="w-[259px] h-[184px] mr-[10px] border border-black border-solid rounded-md px-[20px] bg-[#EDEBEB]">
              <div></div>
              <img
                src="dbs.png"
                alt="DBS Bank Logo"
                className="w-[99px] h-[28.87px] mt-[20px] mb-[10px]"
              />
              <h4 className="font-bold text-[16px]">DBS Bank</h4>
              <p className="text-[11px]">
                DBS Bank Limited is a Singaporean multinational banking and
                financial services corporation headquartered at the Marina Bay
                Financial Centre in the Marina Bay district of Singapore.
              </p>
            </div>
            <div className="w-[259px] h-[184px] mr-[10px] border border-black border-solid rounded-md px-[20px] bg-[#EDEBEB]">
              <div></div>
              <img
                src="proudfood.png"
                alt="Proudfood Logo"
                className="w-[70px] h-[47px] mt-[15px] mb-[10px]"
              />
              <h4 className="font-bold text-[16px]">Proudfoot</h4>
              <p className="text-[11px]">
                Proudfoot engages teams and leadership, at all levels, to create
                innovative solutions to operational constraints and solve the
                people challenge associated with making sure that change takes
                place.
              </p>
            </div>
            <div className="w-[259px] h-[184px] mr-[10px] border border-black border-solid rounded-md px-[20px] bg-[#EDEBEB]">
              <div></div>
              <img
                src="rmi.png"
                alt="MRI Logo"
                className="w-[169px] h-[26px] mt-[20px] mb-[10px]"
              />
              <h4 className="font-bold text-[16px]">RMI</h4>
              <p className="text-[11px]">
                RMI is a trusted global verification partner for Asia-Pacific
                organisations, offering a highly personalised and comprehensive
                background screening service.
              </p>
            </div>
          </div>

          <div className="w-[1000px] p-[10px]">
            <>
              <div className="flex justify-between mt-[50px]">
                <div>
                  <h1 className="font-bold text-[20px]">Recent approvals</h1>
                  <p className="text-[14px]">
                    You can find the recent on-going approvals here
                  </p>
                </div>
                <div className="flex item-center justify-center w-[227px] h-[32px] border-2 border-black border-solid rounded-full bg-[#1E67AF]">
                  Create new approval
                </div>
              </div>

              <div className="flex my-auto mt-[20px] mb-[10px] w-[980px] h-[45px] bg-[#1E67AF] border border-black border-solid p-[10px]">
                <div className="mr-[30px] w-[50px] text-[11px]">Clients</div>
                <div className="mr-[30px] w-[350px] text-[11px]">
                  Approval name
                </div>
                <div className="mr-[30px] w-[100px] text-[11px]">
                  Client contact
                </div>
                <div className="mr-[30px] w-[100px] text-[11px]">Owner</div>
                <div className="mr-[30px] w-[100px] text-[11px]">
                  Date issued
                </div>
                <div className="mr-[30px] w-[100px] text-[11px]">Status</div>
              </div>

              <div className="flex mb-[10px] w-[980px] h-[70px] bg-[#ffffff] border rounded-md border-black border-solid p-[10px]">
                <div className="my-auto mr-[30px] w-[50px] border rounded-md overflow-hidden">
                  <img src="dbs-sm.png" alt="" />
                </div>
                <div className="my-auto mr-[30px] w-[350px] text-[11px]">
                  DBS DEG renewal energy LinkedIn post tiles...{" "}
                </div>
                <div className="flex my-auto mr-[30px] w-[100px] text-[11px]">
                  <div className="font-bold text-[16px] w-[22px] h-[22px] bg-[#FE0000] rounded-full">
                    <p className="mx-auto ml-[6px] text-[#FFFFFF]">J</p>
                  </div>
                  <p className="ml-[2px] my-auto">Jasmine</p>
                </div>
                <div className="flex my-auto mr-[30px] w-[100px] text-[11px]">
                  <div className="font-bold text-[16px] w-[22px] h-[22px] bg-[#FE0000] rounded-full">
                    <p className="mx-auto ml-[6px] text-[#FFFFFF]"></p>
                  </div>
                  <p className="ml-[2px] my-auto">Radhika</p>
                </div>
                <div className="my-auto mr-[30px] w-[100px] text-[11px]">
                  January 23, 2022
                </div>
                <div className="flex my-auto mr-[30px] w-[100px] text-[11px] bg-[#FCE513] rounded-md justify-center">
                  In progress
                </div>
              </div>

              <div className="flex mb-[10px] w-[980px] h-[70px] bg-[#EDEBEB] border rounded-md border-black border-solid p-[10px]">
                <div className="my-auto mr-[30px] w-[50px] bg-[#041B31] border rounded-md overflow-hidden">
                  <img src="proudfood-sm.png" alt="" />
                </div>
                <div className="my-auto mr-[30px] w-[350px] text-[11px]">
                  PF website mining and metals edit
                </div>
                <div className="flex my-auto mr-[30px] w-[100px] text-[11px]">
                  <div className="font-bold text-[16px] w-[22px] h-[22px] bg-[#3B4256] rounded-full">
                    <p className="mx-auto ml-[6px] text-[#ffffff]">L</p>
                  </div>
                  <p className="ml-[2px] my-auto">Lorena</p>
                </div>
                <div className="flex my-auto mr-[30px] w-[100px] text-[11px]">
                  <div className="font-bold text-[16px] w-[22px] h-[22px] bg-[#FE0000] rounded-full">
                    <p className="mx-auto ml-[6px] text-[#FFFFFF]"></p>
                  </div>
                  <p className="ml-[2px] my-auto">Radhika</p>
                </div>
                <div className="my-auto mr-[30px] w-[100px] text-[11px]">
                  January 23, 2022
                </div>
                <div className="flex my-auto mr-[30px] w-[100px] text-[11px] bg-[#F4B000] rounded-md justify-center">
                  1st revision
                </div>
              </div>

              <div className="flex w-[980px]  h-[70px] bg-[#73B9FF] border  rounded-md border-black border-solid p-[10px]">
                <div className="my-auto mr-[30px] w-[50px] bg-[#67aff7] border rounded-md overflow-hidden">
                  <img src="rmi-sm.png" alt="" />
                </div>
                <div className="my-auto mr-[30px] w-[350px] text-[11px]">
                  RMI January newletter EDM
                </div>
                <div className="flex my-auto mr-[30px] w-[100px] text-[11px]">
                  <div className="font-bold text-[16px] w-[22px] h-[22px] bg-[#FE005B] rounded-full">
                    <p className="mx-auto ml-[4px] text-[#ffffff]">M</p>
                  </div>
                  <p className="ml-[2px] my-auto">Lorena</p>
                </div>
                <div className="flex my-auto mr-[30px] w-[100px] text-[11px]">
                  <div className="font-bold text-[16px] w-[22px] h-[22px] bg-[#FE0000] rounded-full">
                    <p className="mx-auto ml-[6px] text-[#FFFFFF]"></p>
                  </div>
                  <p className="ml-[2px] my-auto">Radhika</p>
                </div>
                <div className="my-auto mr-[30px] w-[100px] text-[11px]">
                  January 23, 2022
                </div>
                <div className="flex my-auto mr-[30px] w-[100px] text-[11px] bg-[#F47500] rounded-md justify-center">
                  2nd revision
                </div>
              </div>
            </>
          </div>
          <div>
            <p className="font-bold text-[16px] text-[#1E67AF] mb-[30px]">
              See all approvals here
            </p>
          </div>
          <span className="ml-[840px]">&#169;Manning&#38;Co. 2022</span>
        </section>

        <div className="w-[1000px]"></div>
      </main>
    </>
  );
};

export default Main;
