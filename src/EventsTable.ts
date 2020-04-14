export enum TYPE {
    OPENPLAY = 'Open-Play',
    KICKOFF = 'kick-off',
    THROWIN = 'Throw-in',
    PENALTY = 'Penalty',
    FREEKICK = 'Free-Kick',
    CORNER = 'Corner'
}
export enum BodyPart {
  LEFTFOOT = 'LF',
  RIGHTFOOT = 'RF',
  HEAD = 'H'
}
export enum PassHeight {
    LOW = 'L',
    High = 'H',
    Ground = 'G'
}
export enum ExtraPamaters {
    Deflected = 'D',
    FirstTime = 'F',
    Redirect = 'R',
    ArialWon = 'A',
    BackWheel = 'BW'
}
export type PassShoot = 'PASS' | 'SHOOT'
export const passShoot = (passShoot: PassShoot) =>  {
    if(passShoot === "PASS")
        return [TYPE.OPENPLAY, TYPE.KICKOFF, TYPE.THROWIN] 
    else if (passShoot === "SHOOT")
        return [TYPE.OPENPLAY, TYPE.FREEKICK, TYPE.PENALTY, TYPE.CORNER]
    else return []
}

export const BP = (type: TYPE, passShoot: PassShoot): BodyPart[] => {
    if(type === TYPE.OPENPLAY && passShoot === "SHOOT")
        return [BodyPart.LEFTFOOT, BodyPart.HEAD, BodyPart.RIGHTFOOT]
    else if(passShoot === "SHOOT")
        return [BodyPart.LEFTFOOT, BodyPart.RIGHTFOOT]
    if(type === TYPE.THROWIN && passShoot === "PASS")
        return []
    else if(passShoot === "PASS")
        return [BodyPart.LEFTFOOT, BodyPart.HEAD, BodyPart.RIGHTFOOT]
    else return []
}

export const Height = (type: TYPE) => {
    if(type === TYPE.THROWIN)
    return [PassHeight.LOW, PassHeight.High]
    else
    return [PassHeight.Ground, PassHeight.LOW, PassHeight.High]
}

export const Extras = (passShoot: PassShoot, BP?: BodyPart) => {
    if(!BP)
      return []
    else if(passShoot === 'PASS' && (BP === BodyPart.LEFTFOOT || BP === BodyPart.RIGHTFOOT))
      return [ExtraPamaters.Deflected, ExtraPamaters.FirstTime, ExtraPamaters.Redirect]
    else if(passShoot === 'PASS')
      return [ExtraPamaters.ArialWon, ExtraPamaters.Deflected, ExtraPamaters.FirstTime, ExtraPamaters.Redirect]
    else if(passShoot === 'SHOOT' && BP === BodyPart.HEAD)
      return [ExtraPamaters.ArialWon]
    else if(passShoot === 'SHOOT')
      return [ExtraPamaters.BackWheel]
    else return []
}