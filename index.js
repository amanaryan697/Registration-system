
document.addEventListener("DOMContentLoaded", function() {
    const nam = document.getElementById("studentName");
    const stuid = document.getElementById("studentID");
    const ema = document.getElementById("email");
    const no = document.getElementById("contactNo");
    const addi = document.getElementById("addi"); 

    addi.addEventListener("click", store);

    function store(event) {
        event.preventDefault();

        
        const studentName = nam.value;
        const studentID = stuid.value;
        const email = ema.value;
        const contactNo = no.value;

        if (!validateStudentName(studentName) || !validateEmail(email) || !validateContactNo(contactNo)) {
            alert("Please provide valid input values.");
            return; 
        }


        console.log( studentName);
        console.log( studentID);
        console.log(email);
        console.log(contactNo);

        const table = document.getElementById("tro"); 

        const tro = document.createElement("tr");

        const tdo1 = document.createElement("td");
        tdo1.textContent = studentName;
        tro.appendChild(tdo1);

        const tdo2 = document.createElement("td");
        tdo2.textContent = studentID;
        tro.appendChild(tdo2);

        const tdo3 = document.createElement("td");
        tdo3.textContent = email;
        tro.appendChild(tdo3);

        const tdo4 = document.createElement("td");
        tdo4.textContent = contactNo;
        tro.appendChild(tdo4);
        // console.log(tro)

       if (studentName,studentID,email,contactNo =='') return;
        
       const res =document.createElement("button");
       tro.appendChild(res);

       res.innerHTML='<i class="fa-solid fa-pen-to-square"></i>';
        res.classList.add("resee");

        const dele= document.createElement("button");
        tro.appendChild(dele);

        dele.innerHTML='<i class="fa-solid fa-trash"></i>';
        dele.classList.add("trash");

        table.appendChild(tro); 
       

        // reset the form after submit 
        nam.value = "";
        stuid.value = "";
        ema.value = "";
        no.value = "";


        // for deleting purpose
        const deleteButton = tro.querySelector(".trash");
        deleteButton.addEventListener("click", function() {
           
            const parentRow = deleteButton.closest("tr");
            parentRow.remove();
        });


         // for editing purpose 
         res.addEventListener("click" , function() {
            
            nam.value = tdo1.textContent;
            stuid.value = tdo2.textContent;
            ema.value = tdo3.textContent;
            no.value = tdo4.textContent;

            
            tro.remove();
        });

        function validateStudentName(studentName) {
            return /^[a-zA-Z]+$/.test(studentName); // Validate name contains only letters
        }
    
        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Validate email format
        }
    
        function validateContactNo(contactNo) {
            return /^\d+$/.test(contactNo); // Validate contact number contains only digits
        }
    }
});




