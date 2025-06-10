@Document(collection = "tasks")
public class Task {
    @Id
    private String id;
    private String name;
    private String owner;
    private String command;
    private List<TaskExecution> taskExecutions = new ArrayList<>();
    // getters and setters
}

public class TaskExecution {
    private Date startTime;
    private Date endTime;
    private String status;
    private String output;
    // getters and setters
}
