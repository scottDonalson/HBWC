package rocks.hbwc.hbwc_spring_react.data.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.sql.Date;

/**
 * @author ksdon
 **/

@Entity
@Table(name="wrestlers")
@Data
@ToString
public class WrestlerEntity {
    @Id
    @Column(name="wrestler_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long wrestler_id;

    @Column(name="first_name")
    private String first_name;

    @Column(name="last_name")
    private String last_name;

    @Column(name="usa_number")
    private String usa_number;

    @Column(name="gender")
    private String gender;

    @Column(name="school")
    private String school;

    @Column(name="birth_date")
    private Date birth_date;

    @Column(name="email")
    private String email;

    @Column(name="phone_number")
    private String phone_number;

}
