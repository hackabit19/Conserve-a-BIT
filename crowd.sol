pragma solidity >=0.4.22 <0.6.0;

contract ProjectGenerator {
    Project[] public Projects;
    
    function createProject(uint deadline, string memory description, uint projectGoal) public {
        Project newProject = new Project(msg.sender, deadline, description, projectGoal);
        Projects.push(newProject);
    }
    
    function AllProjects() public view returns (Project[] memory) {
        return Projects;
    }
}

contract Project {
    
    enum State {
        Fundraising,
        Expired,
        Successful
    }
    
    
    string public description;
    address payable public creator;
    address[] public contributors;
    uint public contributorsCount;
    uint public projectGoal;
    uint public startTime;
    uint public deadline;
    uint public moneyRaised;
    
    mapping (address => uint) public contributions;
    
    State public state = State.Fundraising;
    
    modifier inState(State _state) {
        require(state == _state);
        _;
    }
    
    constructor (address payable manager, uint duration, string memory descript, uint goal) public {
        creator = manager;
        startTime = now;
        deadline = now + (duration * 1 days);
        description = descript;
        projectGoal = goal;
    }
    
    function support () inState(State.Fundraising) payable public{
        require(msg.sender != creator);
        contributors.push(msg.sender);
        contributions[msg.sender] = contributions[msg.sender] + (msg.value);
        moneyRaised = moneyRaised + (msg.value);
        contributorsCount++;
        FundingCompleteOrExpired();
    }
    
    function FundingCompleteOrExpired() public
    {
        if (moneyRaised >= projectGoal)
        {
            state = State.Successful;
            creator.transfer(moneyRaised);
        }
        
        if (now > deadline) 
        {
            state = State.Expired;
        }
        
    }
}
