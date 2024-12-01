
        var tablinks =document.getElementsByClassName("tab-links");
        var content = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-links");
            }
            for(contents of content){
                contents.classList.remove("active-tab");
            }
        
            event.currentTarget.classList.add("active-links");
            document.getElementById(tabname).classList.add("active-tab")
        }