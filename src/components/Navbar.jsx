
const Navbar = () => {
    return (
      <navbar >
        <div class="py-3 border-b">
          <div class="flex justify-between px-20 items-center font-semibold">
            <div>
              <h1 class="text-2xl">Electrochat</h1>
            </div>
            
            <div>
              <button class="py-2 px-6 bg-black text-white rounded-3xl font-semibold">
                Essayer la version premium
              </button>
            </div>
          </div>
        </div>
      </navbar>
    );
};

export default Navbar;