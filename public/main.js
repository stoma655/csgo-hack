const memoryjs = require('memoryjs');
const fetch = require('node-fetch');
const processName = 'csgo.exe';
const FL_ONGROUND = (1 << 0);
let offsets;

let url = 'https://raw.githubusercontent.com/frk1/hazedumper/master/csgo.json';
let settings = { method: 'Get' };

fetch(url, settings)
.then(res => res.json())
.then((json) => {
    offsets = json;
    console.log(offsets)
    
});




function init() {



  memoryjs.openProcess(processName, (error, processObject) => {
    if (error) {
        alert('csgo not running');
    };
  
    const clientModule = memoryjs.findModule('client.dll', processObject.th32ProcessID);
    

    
    // const myTeamNumber = memoryjs.readMemory(processObject.handle, localPlayerAddress + offsets.netvars.m_iTeamNum, memoryjs.INT);
    
    
    
    setInterval(() => {

      const localPlayerAddress = memoryjs.readMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwLocalPlayer, memoryjs.INT);
      // bunnyhop 
      // const flags = memoryjs.readMemory(processObject.handle, localPlayerAddress + offsets.netvars.m_fFlags, memoryjs.INT);
      // if (flags & FL_ONGROUND) {
      //     console.log('Player is on the ground.');
          
      //     memoryjs.writeMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwForceJump, 5, memoryjs.INT)
          
      // } else {
      //     console.log('Player is in the air.');
      //     memoryjs.writeMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwForceJump, 4, memoryjs.INT)
      // }

      // trigger 
      const crosshairId = memoryjs.readMemory(processObject.handle, localPlayerAddress + offsets.netvars.m_iCrosshairId, memoryjs.INT);
      const localPlayerTeam = memoryjs.readMemory(processObject.handle, localPlayerAddress + offsets.netvars.m_iTeamNum, memoryjs.INT);
      if (crosshairId > 0) {
          const entity = memoryjs.readMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwEntityList + ((crosshairId - 1) * 0x10), memoryjs.INT);
          const entityTeam = memoryjs.readMemory(processObject.handle, entity + offsets.netvars.m_iTeamNum, memoryjs.INT);
          

          if (entityTeam === localPlayerTeam) {
              console.log(`Player with ID ${crosshairId} is in the crosshair and is on the same team.`);
          } else {
              console.log(`Player with ID ${crosshairId} is in the crosshair and is on a different team.`);
              memoryjs.writeMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwForceAttack, 5, memoryjs.INT);
              setTimeout(() => {
                memoryjs.writeMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwForceAttack, 4, memoryjs.INT);
              }, 3)
          }
      } else {
          console.log('No player in the crosshair.');
          
      }




      // glow esp
      for (let i = 0; i < 64; i++) {
        const currentPlayerAddress = memoryjs.readMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwEntityList + (i * 0x10), memoryjs.INT);
        

        const glowManagerAddress = memoryjs.readMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwGlowObjectManager, memoryjs.INT);
        if (currentPlayerAddress !== 0) {
          const currentPlayerTeamNumber = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_iTeamNum, memoryjs.INT);
          
          if (currentPlayerTeamNumber !== localPlayerTeam) {
            const glowIndex = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_iGlowIndex , memoryjs.INT);
            let color = [185,126,0]
  
            memoryjs.writeMemory(processObject.handle, glowManagerAddress + (glowIndex * 0x38) + 0x08 ,color[0] ,"float");
            memoryjs.writeMemory(processObject.handle, glowManagerAddress + (glowIndex * 0x38) + 0xC ,color[1] ,"float");
            memoryjs.writeMemory(processObject.handle, glowManagerAddress + (glowIndex * 0x38) + 0x10 ,color[2] ,"float");
            memoryjs.writeMemory(processObject.handle, glowManagerAddress + (glowIndex * 0x38) + 0x14 ,1.0 ,"float");
            
            memoryjs.writeMemory(processObject.handle, glowManagerAddress + (glowIndex * 0x38) + 0x28 ,true ,"bool");
            memoryjs.writeMemory(processObject.handle, glowManagerAddress + (glowIndex * 0x38) + 0x29 ,false ,"bool");
          }
        }
        
       }
     },20)
  });
}


  
  

// получение нашего хп

// memoryjs.openProcess(processName, (error, processObject) => {
//     if (error) throw error;

//     const clientModule = memoryjs.findModule('client.dll', processObject.th32ProcessID);

//     const localPlayerAddress = memoryjs.readMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwLocalPlayer, memoryjs.INT);
//     const health = memoryjs.readMemory(processObject.handle, localPlayerAddress + offsets.netvars.m_iHealth, memoryjs.INT);

//     console.log(`Здоровье локального игрока: ${health}`);
// });


// получение позиции нашей 

// memoryjs.openProcess(processName, (error, processObject) => {
//   if (error) throw error;

//   const clientModule = memoryjs.findModule('client.dll', processObject.th32ProcessID);
//   const localPlayerAddress = memoryjs.readMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwLocalPlayer, memoryjs.INT);
  
//   const position = memoryjs.readMemory(processObject.handle, localPlayerAddress + offsets.netvars.m_vecOrigin, memoryjs.VEC3);

//   console.log(`Координаты локального игрока: X: ${position.x}, Y: ${position.y}, Z: ${position.z}`);
// });








// +++++++

// memoryjs.openProcess(processName, (error, processObject) => {
//   if (error) throw error;

//   const clientModule = memoryjs.findModule('client.dll', processObject.th32ProcessID);
//   // const engineModule = memoryjs.findModule('engine.dll', processObject.th32ProcessID);

//   // const clientStateAddress = memoryjs.readMemory(processObject.handle, engineModule.modBaseAddr + offsets.signatures.dwClientState, memoryjs.INT);
//   // const maxPlayers = memoryjs.readMemory(processObject.handle, clientStateAddress + offsets.signatures.dwClientState_MaxPlayer, memoryjs.INT);

//   // console.log(`Количество игроков в матче: ${maxPlayers}`);

//   for (let i = 0; i < 65; i++) {
//     const currentPlayerAddress = memoryjs.readMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwEntityList + (i * 0x10), memoryjs.INT);
//     const teamNumber = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_iTeamNum, memoryjs.INT);


//     // Чтение здоровья игрока
// const health = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_iHealth, memoryjs.INT);
// console.log(`Здоровье игрока: ${health}`);
//   // Чтение координат игрока
//   const position = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_vecOrigin, memoryjs.VEC3);
//   console.log(`Координаты игрока: X: ${position.x}, Y: ${position.y}, Z: ${position.z}`);



//     console.log(`Игрок ${i + 1}: Адрес - ${currentPlayerAddress}, Команда - ${teamNumber}`);
//   }
// });

















// НЕ ПРОВЕРЕНО 


// const memoryjs = require('memoryjs');
// const processName = 'csgo.exe';
// const offsets = {
//   "timestamp": 1684251782,
//   "signatures": {
//     "dwEntityList": 81784588,
//     "dwClientState": 5894556,
//     "dwClientState_MaxPlayer": 904
//   },
//   "netvars": {
//     "m_iHealth": 256,
//     "m_vecOrigin": 312,
//     "m_iTeamNum": 244,
//     "m_iShotsFired": 66528,
//     "m_iCrosshairId": 71736,
//     "m_hActiveWeapon": 12040,
//     "m_iItemDefinitionIndex": 12218
//   }
// };

// memoryjs.openProcess(processName, (error, processObject) => {
//   if (error) throw error;

//   const clientModule = memoryjs.findModule('client.dll', processObject.th32ProcessID);
  
//   // Чтение здоровья игрока
//   const health = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_iHealth, memoryjs.INT);
  
//   // Чтение координат игрока
//   const position = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_vecOrigin, memoryjs.VEC3);
  
//   // Чтение номера команды игрока
//   const teamNumber = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_iTeamNum, memoryjs.INT);
  
//   // Чтение количества выстрелов игрока
//   const shotsFired = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_iShotsFired , memoryjs.INT);
  
//    // Чтение ID перекрестия прицела игрока
//    const crosshairId = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_iCrosshairId , memoryjs.INT);
   
//    // Чтение активного оружия игрока
//    const activeWeaponAddress = memoryjs.readMemory(processObject.handle, currentPlayerAddress + offsets.netvars.m_hActiveWeapon , memoryjs.INT) &0xFFF;
//    const weaponEntityAddress = memoryjs.readMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwEntityList + (activeWeaponAddress -1) *0x10 , memoryjs.INT);
//    const weaponID = memoryjs.readMemory(processObject.handle, weaponEntityAddress + offsets.netvars.m_iItemDefinitionIndex , memoryjs.INT);

//    console.log(`Здоровье игрока: ${health}`);
//    console.log(`Координаты игрока: X: ${position.x}, Y: ${position.y}, Z: ${position.z}`);
//    console.log(`Номер команды игрока: ${teamNumber}`);
//    console.log(`Количество выстрелов игрока: ${shotsFired}`);
//    console.log(`ID перекрестия прицела игрока: ${crosshairId}`);
//    console.log(`ID активного оружия игрока: ${weaponID}`);
// });












// получение оружия у игрока (не проверено )

// const weaponIDs = {
//   1: "Desert Eagle",
//   2: "Dual Berettas",
//   3: "Five-SeveN",
//   4: "Glock-18",
//   7: "AK-47",
//   8: "AUG",
//   9: "AWP",
//   10: "FAMAS",
//   11: "G3SG1",
//   13: "Galil AR",
//   14: "M249",
//   // ...
// };
// const offsets = {
//   "timestamp": 1684251782,
//   "signatures": {
//     "dwLocalPlayer": 14588284
//   },
//   "netvars": {
//     "m_hActiveWeapon": 12040,
//     "m_iItemDefinitionIndex": 12218
//   }
// };

// memoryjs.openProcess(processName, (error, processObject) => {
//   if (error) throw error;

//   const clientModule = memoryjs.findModule('client.dll', processObject.th32ProcessID);
  
//   const localPlayerAddress = memoryjs.readMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwLocalPlayer, memoryjs.INT);
  
//   const activeWeaponAddress = memoryjs.readMemory(processObject.handle, localPlayerAddress + offsets.netvars.m_hActiveWeapon, memoryjs.INT) & 0xFFF;
  
//   const weaponEntityAddress = memoryjs.readMemory(processObject.handle, clientModule.modBaseAddr + offsets.signatures.dwEntityList + (activeWeaponAddress -1) *0x10 , memoryjs.INT);
  
//   const weaponID = memoryjs.readMemory(processObject.handle, weaponEntityAddress + offsets.netvars.m_iItemDefinitionIndex , memoryjs.INT);
  
//    console.log(`Оружие в руках локального игрока: ${weaponIDs[weaponID]}`);
// });











// --------

// memoryjs.openProcess(processName, (error, processObject) => {
//   if (error) throw error;

//   const clientModule = memoryjs.findModule('client.dll', processObject.th32ProcessID);
//   const entityListAddress = clientModule.modBaseAddr + offsets.dwEntityList;

//   // Максимальное количество игроков в игре
//   const maxPlayers = 64;

//   // Массивы для хранения игроков в командах
//   const terrorists = [];
//   const counterTerrorists = [];

//   // Перебираем все сущности в списке
//   for (let i = 0; i < maxPlayers; i++) {
//     // Получаем адрес текущей сущности
//     const entityAddress = memoryjs.readMemory(processObject.handle, entityListAddress + i * 0x10, memoryjs.INT);

//     // Получаем номер команды и здоровье текущей сущности
//     const teamNum = memoryjs.readMemory(processObject.handle, entityAddress + offsets.netvars.m_iTeamNum, memoryjs.INT);
//     const health = memoryjs.readMemory(processObject.handle, entityAddress + offsets.netvars.m_iHealth, memoryjs.INT);

//     // Проверяем, является ли текущая сущность живым игроком
//     if (health > 0 && health <= 100) {
//       // Добавляем игрока в соответствующий массив в зависимости от его команды
//       if (teamNum === 2) {
//         terrorists.push(entityAddress);
//       } else if (teamNum === 3) {
//         counterTerrorists.push(entityAddress);
//       }
//     }
//   }

//   console.log(`Террористы: ${terrorists.length} игроков`);
//   console.log(`Контратеррористы: ${counterTerrorists.length} игроков`);
// });