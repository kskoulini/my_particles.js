  
        var list = new Array();
        var list_move = new Array();
        function greet()
        {
          console.log("Good morning");
        }

        function creat_particles(count)
        {
          for(i=0;i<count;i++)
          {
            list.push("p"+i);
            list_move.push(Math.floor(Math.random()*10)%4);
          }
          console.log(list_move);
          for(i=0;i<count;i++)
          {
            var node = document.createElement("div");
            node.classList.add("base");
            node.classList.add(list[i]);
            node.style.left = Math.floor(Math.random() * 101) + '%';
            node.style.top = Math.floor(Math.random() * 101) + '%';
            node.style.opacity = Math.floor(Math.random() * 101) + '%';
            document.body.appendChild(node);
          }
          setInterval(function(){
            for(i=0;i<count;i++)
              particle_motion(i);
          },15);
        }
        //setInterval(function(){particle_motion(0)},50);
        function particle_motion(i)
        {
          if (list_move[i] == 0)
          {
            particle_right_down(i);
          }
          else if (list_move[i] == 1)
          {
            particle_left_down(i)
          }
          else if (list_move[i] == 2)
          {
            particle_right_up(i);
          }
          else if(list_move[i] == 3)
          {
            particle_left_up(i);
          }
        }

        function particle_right_down(i)
        {
          if(document.querySelector('.'+list[i]).offsetLeft > window.innerWidth - 25)
          {
            list_move[i] = 1
            particle_left_down(i);
          }
          else if(document.querySelector('.'+list[i]).offsetTop > window.innerHeight - 25)
          {
            list_move[i] = 2;
            particle_right_up(i);
          }
          else
          {
            document.querySelector('.'+list[i]).style.left = document.querySelector('.'+list[i]).offsetLeft + 1 + 'px';
            document.querySelector('.'+list[i]).style.top = document.querySelector('.'+list[i]).offsetTop + 1 + 'px';
          }
        }

        function particle_left_down(i)
        {
          if(document.querySelector('.'+list[i]).offsetLeft < 0)
          {
            list_move[i] = 0;
            particle_right_down(i);
          }
          else if(document.querySelector('.'+list[i]).offsetTop > window.innerHeight - 25)
          {
            list_move[i] = 3;
            particle_left_up(i);
          }
          else
          {
            document.querySelector('.'+list[i]).style.left = document.querySelector('.'+list[i]).offsetLeft - 1 + 'px';
            document.querySelector('.'+list[i]).style.top = document.querySelector('.'+list[i]).offsetTop + 1 + 'px';
          }
        }

        function particle_right_up(i)
        {
          if(document.querySelector('.'+list[i]).offsetLeft > window.innerWidth - 25)
          {
            list_move[i] = 3
            particle_left_up(i);
          }
          else if(document.querySelector('.'+list[i]).offsetTop < 0)
          {
            list_move[i] = 0;
            particle_right_down(i);
          }
          else
          {
            document.querySelector('.'+list[i]).style.left = document.querySelector('.'+list[i]).offsetLeft + 1 + 'px';
            document.querySelector('.'+list[i]).style.top = document.querySelector('.'+list[i]).offsetTop - 1 + 'px';
          }
        }

        function particle_left_up(i)
        {
          if(document.querySelector('.'+list[i]).offsetLeft < 0)
          {
            list_move[i] = 2;
            particle_right_up(i);
          }
          else if(document.querySelector('.'+list[i]).offsetTop < 0)
          {
            list_move[i] = 1;
            particle_left_down(i);
          }
          
          else
          {
            document.querySelector('.'+list[i]).style.left = document.querySelector('.'+list[i]).offsetLeft - 1 + 'px';
            document.querySelector('.'+list[i]).style.top = document.querySelector('.'+list[i]).offsetTop - 1 + 'px';
          }
        }
