// Interface gorda — viola ISP
interface IWorker {
  work(): void;
  eat(): void;
  sleep(): void;
  attendMeeting(): void;
  writeCode(): void;
  designUI(): void;
  manageTeam(): void;
}

// Robot não come, não dorme, não vai a reuniões
class Robot implements IWorker {
  work() { console.log("Robot working"); }
  eat() { throw new Error("Robots don't eat"); }
  sleep() { throw new Error("Robots don't sleep"); }
  attendMeeting() { throw new Error("Robots don't attend meetings"); }
  writeCode() { console.log("Robot writing code"); }
  designUI() { throw new Error("Robot can't design UI"); }
  manageTeam() { throw new Error("Robot can't manage team"); }
}

// Developer não gerencia time nem design UI (neste contexto)
class Developer implements IWorker {
  work() { console.log("Developer working"); }
  eat() { console.log("Developer eating"); }
  sleep() { console.log("Developer sleeping"); }
  attendMeeting() { console.log("Developer in meeting"); }
  writeCode() { console.log("Developer writing code"); }
  designUI() { throw new Error("This developer doesn't design UI"); }
  manageTeam() { throw new Error("This developer doesn't manage team"); }
}
