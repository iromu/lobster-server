package lobster.server.rest.model;

import javax.persistence.*;

/**
 * Created with IntelliJ IDEA.
 * User: spawn
 * Date: 09/11/13
 * Time: 02:05
 * To change this template use File | Settings | File Templates.
 */
@Entity
public class StatusVitamine {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    private Status status;

    @ManyToOne
    private Vitamine vitamine;

    private Integer amount;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Vitamine getVitamine() {
        return vitamine;
    }

    public void setVitamine(Vitamine vitamine) {
        this.vitamine = vitamine;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}