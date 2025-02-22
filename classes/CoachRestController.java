package rocks.hbwc.hbwc_spring_react.web.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import rocks.hbwc.hbwc_spring_react.services.CoachService;
import rocks.hbwc.hbwc_spring_react.web.errors.BadRequestException;
import rocks.hbwc.hbwc_spring_react.web.models.Coach;

import java.util.List;

/**
 * @author ksdon
 **/

@RestController
@RequestMapping("/api/coaches")
public class CoachRestController {

    private final CoachService coachService;

    public CoachRestController(CoachService coachService) {
        this.coachService = coachService;
    }

    @GetMapping
    public List<Coach> getCoaches(@RequestParam(name="email", required=false) String email) {
        return this.coachService.getAllCoaches(email);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Coach createCoach(@RequestBody Coach coach) {
        return this.coachService.createOrUpdate(coach);
    }

    @GetMapping("/{id}")
    public Coach getCoachById(@PathVariable("id") long id) {
        return this.coachService.getCoach(id);
    }

    @PutMapping("/{id}")
    public Coach updateCoach(@PathVariable("id") long id, @RequestBody Coach coach) {
        if(id != coach.getCoach_id()){
            throw new BadRequestException("id mismatch");
        }

        return this.coachService.createOrUpdate(coach);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.RESET_CONTENT)
    public void deleteCoach(@PathVariable("id") long id) {
        this.coachService.deleteCoach(id);
    }
}

