package rocks.hbwc.hbwc_spring_react.data.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

/**
 * @author ksdon
 **/

@Entity
@Table(name = "coachs")
@Data
@ToString
public class CoachEntity {
    @Id
    @Column(name = "coach_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long coach_id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "usa_number")
    private String usa_number;

    @Column(name = "gender")
    private String gender;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phone_number;
}
