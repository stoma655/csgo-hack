const memoryjs = require('memoryjs');
const processName = 'csgo.exe';
const FL_ONGROUND = (1 << 0);
const offsets = {
    "timestamp": 1684251782,
    "signatures": {
      "anim_overlays": 10640,
      "clientstate_choked_commands": 19760,
      "clientstate_delta_ticks": 372,
      "clientstate_last_outgoing_command": 19756,
      "clientstate_net_channel": 156,
      "convar_name_hash_table": 197024,
      "dwClientState": 5894556,
      "dwClientState_GetLocalPlayer": 384,
      "dwClientState_IsHLTV": 19784,
      "dwClientState_Map": 652,
      "dwClientState_MapDirectory": 392,
      "dwClientState_MaxPlayer": 904,
      "dwClientState_PlayerInfo": 21184,
      "dwClientState_State": 264,
      "dwClientState_ViewAngles": 19856,
      "dwEntityList": 81784588,
      "dwForceAttack": 52612424,
      "dwForceAttack2": 52612436,
      "dwForceBackward": 52612508,
      "dwForceForward": 52612496,
      "dwForceJump": 86748264,
      "dwForceLeft": 52612520,
      "dwForceRight": 52612532,
      "dwGameDir": 6532480,
      "dwGameRulesProxy": 87221364,
      "dwGetAllClasses": 14724996,
      "dwGlobalVars": 5893728,
      "dwGlowObjectManager": 87398792,
      "dwInput": 86361312,
      "dwInterfaceLinkList": 10070020,
      "dwLocalPlayer": 14588284,
      "dwMouseEnable": 86212928,
      "dwMouseEnablePtr": 86212880,
      "dwPlayerResource": 52605104,
      "dwRadarBase": 86202852,
      "dwSensitivity": 14605208,
      "dwSensitivityPtr": 14605208,
      "dwSetClanTag": 580224,
      "dwViewMatrix": 81722708,
      "dwWeaponTable": 86365628,
      "dwWeaponTableIndex": 12908,
      "dwYawPtr": 14604584,
      "dwZoomSensitivityRatioPtr": 14627736,
      "dwbSendPackets": 905906,
      "dwppDirect3DDevice9": 680640,
      "find_hud_element": 1521219120,
      "force_update_spectator_glow": 4033514,
      "interface_engine_cvar": 260764,
      "is_c4_owner": 4088816,
      "m_bDormant": 237,
      "m_bIsLocalPlayer": 13864,
      "m_flSpawnTime": 66496,
      "m_pStudioHdr": 10576,
      "m_pitchClassPtr": 86212664,
      "m_yawClassPtr": 14604584,
      "model_ambient_min": 5902740,
      "set_abs_angles": 1993984,
      "set_abs_origin": 1993536
    },
    "netvars": {
      "cs_gamerules_data": 0,
      "m_ArmorValue": 71628,
      "m_Collision": 800,
      "m_CollisionGroup": 1140,
      "m_Local": 12236,
      "m_MoveType": 604,
      "m_OriginalOwnerXuidHigh": 12756,
      "m_OriginalOwnerXuidLow": 12752,
      "m_SurvivalGameRuleDecisionTypes": 4904,
      "m_SurvivalRules": 3328,
      "m_aimPunchAngle": 12348,
      "m_aimPunchAngleVel": 12360,
      "m_angEyeAnglesX": 71632,
      "m_angEyeAnglesY": 71636,
      "m_bBombDefused": 10688,
      "m_bBombPlanted": 2469,
      "m_bBombTicking": 10640,
      "m_bFreezePeriod": 32,
      "m_bGunGameImmunity": 39312,
      "m_bHasDefuser": 71644,
      "m_bHasHelmet": 71616,
      "m_bInReload": 12981,
      "m_bIsDefusing": 39292,
      "m_bIsQueuedMatchmaking": 116,
      "m_bIsScoped": 39284,
      "m_bIsValveDS": 124,
      "m_bSpotted": 2365,
      "m_bSpottedByMask": 2432,
      "m_bStartedArming": 13312,
      "m_bUseCustomAutoExposureMax": 2521,
      "m_bUseCustomAutoExposureMin": 2520,
      "m_bUseCustomBloomScale": 2522,
      "m_clrRender": 112,
      "m_dwBoneMatrix": 9896,
      "m_fAccuracyPenalty": 13120,
      "m_fFlags": 260,
      "m_flC4Blow": 10656,
      "m_flCustomAutoExposureMax": 2528,
      "m_flCustomAutoExposureMin": 2524,
      "m_flCustomBloomScale": 2532,
      "m_flDefuseCountDown": 10684,
      "m_flDefuseLength": 10680,
      "m_flFallbackWear": 12768,
      "m_flFlashDuration": 66672,
      "m_flFlashMaxAlpha": 66668,
      "m_flLastBoneSetupTime": 10536,
      "m_flLowerBodyYawTarget": 39644,
      "m_flNextAttack": 11648,
      "m_flNextPrimaryAttack": 12872,
      "m_flSimulationTime": 616,
      "m_flTimerLength": 10660,
      "m_hActiveWeapon": 12040,
      "m_hBombDefuser": 10692,
      "m_hMyWeapons": 11784,
      "m_hObserverTarget": 13212,
      "m_hOwner": 10716,
      "m_hOwnerEntity": 332,
      "m_hViewModel": 13064,
      "m_iAccountID": 12248,
      "m_iClip1": 12916,
      "m_iCompetitiveRanking": 6788,
      "m_iCompetitiveWins": 7048,
      "m_iCrosshairId": 71736,
      "m_iDefaultFOV": 13116,
      "m_iEntityQuality": 12220,
      "m_iFOV": 12788,
      "m_iFOVStart": 12792,
      "m_iGlowIndex": 66696,
      "m_iHealth": 256,
      "m_iItemDefinitionIndex": 12218,
      "m_iItemIDHigh": 12240,
      "m_iMostRecentModelBoneCounter": 9872,
      "m_iObserverMode": 13192,
      "m_iShotsFired": 66528,
      "m_iState": 12904,
      "m_iTeamNum": 244,
      "m_lifeState": 607,
      "m_nBombSite": 10644,
      "m_nFallbackPaintKit": 12760,
      "m_nFallbackSeed": 12764,
      "m_nFallbackStatTrak": 12772,
      "m_nForceBone": 9868,
      "m_nModelIndex": 600,
      "m_nTickBase": 13376,
      "m_nViewModelIndex": 10704,
      "m_rgflCoordinateFrame": 1092,
      "m_szCustomName": 12364,
      "m_szLastPlaceName": 13764,
      "m_thirdPersonViewAngles": 12776,
      "m_vecOrigin": 312,
      "m_vecVelocity": 276,
      "m_vecViewOffset": 264,
      "m_viewPunchAngle": 12336,
      "m_zoomLevel": 13280
    }
  }




  memoryjs.openProcess(processName, (error, processObject) => {
    if (error) throw error;
  
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